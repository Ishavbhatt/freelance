import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="relative bg-ftr-bg lg:px-10 md:px-10 px-5 pt-20 pb-10">
      <div className="container mx-auto">
        <div className="flex justify-between flex-wrap">
          <div className="my-1 w-full md:w-1/2 lg:w-2/5">
          <span className="block text-gray-300 text-xl font-medium mb-2">Let's keep in touch!
</span>
            {[
              {
                icon: "/icons/pin.png",
                text: "Dharmashal, Himachal Pradesh, India",
              },
              {
                icon: "/icons/mail.png",
                text: "ishavbhattkhaniyara@gmail.com",
              },
              {
                icon: "/icons/smartphone.png",
                text: "9418249045",
              },
            ].map((item, index) => (
              <div className="flex my-5" key={index}>
                <Image src={item.icon} width={25} height={20} />
                <a className="text-custom-grey ml-2 text-base font-normal align-center">
                  {item.text}
                </a>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-6/12">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block text-gray-300 text-xl font-medium mb-2">
                  Useful Links
                </span>
                {[
            {
              text: "Home",
              link: "/"
            },
            {
              text: "About Us",
              link: "/"
            },
            {
              text: "Services",
              link: "/"
            },
            {
              text: "Projects",
              link: "/"
            }
          ].map((item, index) => (
                <ul className="mb-2 list-unstyled">
                <Link href={item.link}>
                  <a className="mb-3 text-custom-grey text-base font-normal hover:text-gray-400">{item.text}</a>
                </Link>
              </ul>
              ))}

              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block text-gray-300 text-xl font-medium mb-2">
                  Follow Us On
                </span>
                <div className="">
          <a href="https://www.facebook.com/" target="blank" className="pr-2 hover:opacity-75"><Image src="/icons/facebook.png" width={30} height={30} /></a>
          <a href="https://www.instagram.com/" target="blank" className=" hover:opacity-75"><Image src="/icons/instagram.png" width={30} height={30} /></a>
          </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              © Company Name, All Right Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
