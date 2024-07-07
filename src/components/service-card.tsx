import React, { useState } from "react";
import {
  PaperClipIcon,
  ChartPieIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  LightBulbIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const icons = {
  PaperClipIcon: <PaperClipIcon className="w-12 h-12 text-white mb-4" />,
  ChartPieIcon: <ChartPieIcon className="w-12 h-12 text-white mb-4" />,
  ShieldCheckIcon: <ShieldCheckIcon className="w-12 h-12 text-white mb-4" />,
  LightningBoltIcon: <LightBulbIcon className="w-12 h-12 text-white mb-4" />,
  PhotographIcon: <PhotoIcon className="w-12 h-12 text-white mb-4" />,
  CheckCircleIcon: <CheckCircleIcon className="w-12 h-12 text-white mb-4" />,
};
const ServiceCard = ({ icon, title, description }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="service-card bg-gray-800 p-6 rounded-lg shadow-lg text-center relative hover:scale-90 duration-500  ">
      <div className="service-card-border absolute bottom-0 left-0 right-0 h-1 border-b-4 border-transparent"></div>
      {icons[icon]}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <button
        onClick={handleClickOpen}
        className="serviceCardButton bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-300">
        Read More <span className="text-red-500 ml-2">+</span>
      </button>
      {/* @ts-ignore */}
      <Dialog open={open} onClose={handleClose}>
        {/* @ts-ignore */}
        <DialogHeader>{title}</DialogHeader>
        {/* @ts-ignore */}
        <DialogBody>
          {/* @ts-ignore */}
          {description}
        </DialogBody>
        {/* @ts-ignore */}
        <DialogFooter>
          {/* @ts-ignore */}
          <Button onClick={handleClose} color="primary" className="mx-2">
            Close
          </Button>
          {/* @ts-ignore */}
          <Button onClick={handleClose} color="primary" className="mx-2">
            Apply Now
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default ServiceCard;
