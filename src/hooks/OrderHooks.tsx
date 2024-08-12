import { useAppContext } from "@/context/AppContext";
import axios from "axios";
import { useRouter } from "next-nprogress-bar";
import { toast } from "react-toastify";

export function useOrder() {
  const router = useRouter();
  const { user } = useAppContext();
  console.log(user);
  async function placeOrder(firstData: any, secondData: any, amounts: any) {
    console.log(firstData, secondData, "CHECK DATA");

    try {
      // Create Payment
      const paymentResponse = await axios.post("api/createPayment", {
        amount: amounts.totalAmount.toFixed(2),
      });

      const url = paymentResponse.data.data;

      const newWindow = window.open(url, "PaymentWindow", "width=600,height=600");

      if (!newWindow) {
        toast.error("Please allow popups for this site.");
        return;
      }
// File Upload
const form = new FormData;
form.set('file' , secondData?.file);
console.log(secondData?.file , "Watch");
     const {data} = await axios.post("api/upload", form);
      // Place Order
      await axios.post("api/orders", {
        id_: 0,
        payment_type: "PayPal",
        affiliate_amount: amounts.amountPer100Words,
        affiliate_amount_paid: amounts.totalAmount,
        affiliate_id: 2,
        date: new Date().toISOString(), // Fixed ISO string method
        order_no: "1",
        original_amount: amounts.amountPer100Words,
        status: 1,
        total_amount: amounts.totalAmount,
        user_id: 0,
      });

      // Create Client
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
          file : data && data?.filePath,
          address: firstData.address,
          city: firstData.city,
          postalCode: firstData?.postalCode,
        },
        referring_points: 0,
        role_id: 1,
        status: 1,
        token: "",
        username: user?.name,
        zip: firstData?.postalCode,
        created: new Date().toISOString(), // Fixed ISO string method
        modified: new Date().toISOString(), // Fixed ISO string method
      });

      // Success message
      toast.success("Order placed successfully!");

      // Optional: Redirect or perform any additional actions
      router.push('/');
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(`Error: ${error.response.data.message || 'An unexpected error occurred.'}`);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  }

  return { placeOrder };
}
