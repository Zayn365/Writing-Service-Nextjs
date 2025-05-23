import {
  Typography,
  IconButton,
  Input,
  Button,
} from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Company", "About Us", "Team", "Products", "Blog"];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex !w-full py-10 mb-5 md:mb-20 flex-col justify-center !items-center bg-gray-900 container max-w-6xl mx-auto rounded-2xl p-5 ">
          {/* @ts-ignore */}
          <Typography
            className="text-2xl md:text-3xl text-center font-bold "
            color="white"
          >
            Join our community!
          </Typography>
          {/* @ts-ignore */}
          <Typography
            color="white"
            className=" md:w-7/12 text-center my-3 !text-base"
          >
            Get news in your inbox every week! We hate spam too, so no worries
            about this.
          </Typography>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
            <div className="sm:w-80">
              {/* @ts-ignore */}
              <Input label="Email" color="white" />
            </div>
            {/* @ts-ignore */}
            <Button size="md" className="lg:w-32" color="white">
              subscribe
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center !justify-between">
          {/* @ts-ignore */}
          <Typography
            as="a"
            href="https://www.material-tailwind.com"
            target="_blank"
            variant="h6"
            className="text-gray-900"
          >
            <img src="image/logo.png" alt="logo" className="w-1/2" />
          </Typography>
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                {/* @ts-ignore */}
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="white"
                  className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
          <div className="flex w-fit justify-center gap-2">
            {/* @ts-ignore */}
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-twitter text-lg" />
            </IconButton>
            {/* @ts-ignore */}
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-youtube text-lg" />
            </IconButton>
            {/* @ts-ignore */}
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
            {/* @ts-ignore */}
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-github text-lg" />
            </IconButton>
          </div>
        </div>
        {/* @ts-ignore */}
        <Typography
          color="blue-gray"
          className="text-center mt-12 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} Made for <a href="/">Ghost Writers🖤</a> by{" "}
          <a href="https://github.com/Zayn365" target="_blank">
            Muhammad Zain Saeed
          </a>
          .
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
