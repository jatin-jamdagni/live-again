import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    designation: "CEO @Tech Innovators Ltd.",
    image: image1,
    content:
      "NEW DIGITAL HORIZON has revolutionized our document management process. Their solutions are secure, scalable, and incredibly user-friendly, making it easier for our team to stay compliant while improving productivity.",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Head of Operations @HealthCare Solutions",
    image: image2,
    content:
      "We were struggling with securing sensitive health records until we implemented NEW DIGITAL HORIZON’s document lifecycle management system. It’s been a game changer for our compliance and document security.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    designation: "CTO @Finance Corp.",
    image: image1,
    content:
      "The level of support and expertise that NEW DIGITAL HORIZON offers is unparalleled. Their team helped us integrate a comprehensive document management system that boosted our efficiency and saved us time and resources.",
  },
  {
    id: 4,
    name: "Sarah Lee",
    designation: "Legal Manager @Legal Partners",
    image: image2,
    content:
      "NEW DIGITAL HORIZON’s secure document management and automated workflows have streamlined our legal document handling process, making it easier for us to manage complex legal files and ensuring compliance every step of the way.",
  },
];
