
interface Service {
    title: string;
    icon: string;
  }
  
  const services: Service[] = [
    { title: "Ebook Writing Service", icon: "/icons/ebook-writing.png" },
    { title: "Book Description Writing", icon: "/icons/book-description.png" },
    { title: "Full Package Publishing", icon: "/icons/full-package.png" },
    { title: "Article/Blog post Writing", icon: "/icons/article-blog.png" },
    { title: "Ebook Editing", icon: "/icons/ebook-editing.png" },
    { title: "Book Formatting", icon: "/icons/book-formatting.png" },
    { title: "Cover Creation", icon: "/icons/cover-creation.png" },
    { title: "Keyword Research", icon: "/icons/keyword-research.png" },
    { title: "Children's Books Illustration", icon: "/icons/children-illustration.png" },
    { title: "Prewritten Books", icon: "/icons/prewritten-books.png" },
    { title: "Any Other Service", icon: "/icons/any-other-service.png" }
];
  
  const ServicesSection = () => {
    return (
      <section className="bg-gray-100 py-5">
                <h2 className="mx-auto w-full text-[30px] text-center pb-10 lg:text-[48px] font-bold leading-[45px] lg:leading-[60px] lg:max-w-2xl">Writing Services</h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center justify-between bg-white rounded-lg shadow-md p-6">
                <img src={service.icon} alt={service.title} className="w-12 h-12" />
                <h3 className="ml-4 text-lg font-semibold">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesSection;
  