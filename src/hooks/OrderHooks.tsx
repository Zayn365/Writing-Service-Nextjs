import { useAppContext } from "@/context/AppContext";
import axios from "axios";
import { useRouter } from "next-nprogress-bar";

export function useOrder() {
  const router = useRouter();
  const { user } = useAppContext();
  console.log(user);
  async function placeOrder(firstData: any, secondData: any, amounts: any) {
    console.log(firstData, secondData, "CHECK DATA");

    const date = new Date().toISOString;
    await axios
      .post("api/createPayment", {
        amount: amounts.totalAmount,
      })
      .then((response: any) => {
        const url = response.data.data;

        const newWindow = window.open(
          url,
          "PaymentWindow",
          "width=600,height=600"
        );

        if (!newWindow) {
          alert("Please allow popups for this site.");
        }
      });

    await axios.post("api/orders", {
      id_: 0,
      payment_type: "PayPal",
      affiliate_amount: amounts.amountPer100Words,
      affiliate_amount_paid: amounts.totalAmount,
      affiliate_id: 2,
      date: `${date}`,
      order_no: "1",
      original_amount: amounts.amountPer100Words,
      status: 1,
      total_amount: amounts.totalAmount,
      user_id: 0,
    });
    await axios.post("api/clients", {
      id_: 44,
      address: firstData.address,
      city: firstData.city,
      completed_articles: 0,
      country: firstData.country,
      email: firstData.email,
      is_deleted: null,
      name: user?.name,
      password: user?.password,
      paypal_id: "",
      phone: "",
      profile_image: "",
      referer_id: 0,
      streetname: {
        address: firstData.address,
        city: firstData.city,
        postalCode: firstData?.postalCode,
      },
      referring_points: 0,
      role_id: 1,
      status: 1,
      token: "",
      username: user.name,
      zip: firstData?.postalCode,
      created: new Date()?.toISOString,
      modified: new Date()?.toISOString,
    });
  }
  return { placeOrder };
}
