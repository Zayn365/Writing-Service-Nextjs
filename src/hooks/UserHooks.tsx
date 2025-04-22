import { Axios } from "../utils/Axios";
import { useAppContext } from "@/context/AppContext";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const UserHooks = () => {
  const router = useRouter();
  const x = useAppContext();
  const date = new Date();

  async function handleSignup(data: any) {
    try {
      const res = await Axios.post("/api/signup", {
        address: {
          address: "",
          city: "",
          country: "",
          streetName: "",
          zip: "",
        },
        categories: [],
        date: date.toISOString(),
        declined: false,
        editorRating: 0,
        email: data?.email,
        isChiefEditor: false,
        isEditor: false,
        name: data.name,
        password: data.password,
        paypalId: "",
        phoneNumber: "",
        profileImage:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        rating: 0,
        status: "active",
        userType: "user",
        writerSampleFile: "https://example.com/johndoe-sample.docx",
      });

      toast.success("User Created Successfully!");
      setTimeout(() => {
        router.push("/signin");
      }, 6000);
    } catch (e: any) {
      console.log("TCL ~ handleSignup ~ e:", e);
      toast.error(e?.response?.data?.error || e.message);
    }
  }

  async function handleSignIn(data: any) {
    try {
      const res = await Axios.post("/api/login", {
        email: data.email,
        password: data.password,
      });

      console.log(res.data.user);
      x.setUser(res.data.user);
      Cookies.set("user", JSON.stringify(res.data.user));

      toast.success("User Logged In Successfully");
      setTimeout(() => {
        if (res?.data?.user?.userType === "admin") {
          router.push("/admin");
        } else {
          router.push("/");
        }
      }, 2000);
    } catch (error: any) {
      console.log("TCL ~ handleSignIn ~ error:", error);
      toast.error(error?.response?.data?.error || error.message);
    }
  }
  return { handleSignup, handleSignIn };
};
