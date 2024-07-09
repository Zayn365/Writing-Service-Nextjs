import {Axios} from "../utils/Axios";
import { useAppContext } from "@/context/AppContext";
import  Cookies from "js-cookie";
import {useRouter} from "next/navigation"
import { toast } from "react-toastify";

export const UserHooks = ()=> {
const router = useRouter();
const x = useAppContext()
console.log(x);
const date =new Date;

async function handleSignup(data:any){
    try{
        Axios.post('/api/signup' , {
            v: 0,
            address: {
              address: "123 Main St",
              city: "New York",
              country: "USA",
              streetName:" Main St",
              zip: "10001"
            },
            categories: ["news"," politics"],
            date: date.toISOString(),
            declined: false,
            editorRating: 4.5,
            email: data?.email,
            isChiefEditor: true,
            isEditor: true,
            name: data.name,
            password: data.password,
            paypalId: "",
            phoneNumber: "",
            profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            rating: 4.2,
            status: "active",
            userType: "user",
            writerSampleFile: "https://example.com/johndoe-sample.docx"
         }).then((res:any) => {
               toast.success("User Created Successfully!");
               setTimeout(() => {
                router.push("/signin");
            }, 6000);
         }).catch((e:any) => {
          toast.error(`User Faild To Created Cause ${e.message}`);          
         });
    } catch(e:any) {
    toast.error("User Faild To Created");
      console.log(e.message);
    }
    
 }

 async function handleSignIn (data:any) {
   try {
    Axios.post("/api/login" , {
      email: data.email,
      password: data.password
    }).then((res:any) => {
      console.log(res.data.user);
      x.setUser(res.data.user);
      const stringer = JSON.stringify(res.data.user);
      Cookies.set("user" , stringer);
      toast.success("User Logged In SuccessFully");
      setTimeout(() => {
        router.push("/");
      } , 2000)
    })
   } catch (error:any) {
    toast.success("Login Failed");
    console.log(error.message); 
  }
 }
return {handleSignup, handleSignIn};
}