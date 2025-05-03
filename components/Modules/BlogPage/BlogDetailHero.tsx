import { IBlog } from "@/base/interface/IBlog";
import { PageContainer } from "@/components/Container/PageContainer";
import Image from "next/image";

const BlogDetailHero = ({details}:{details: IBlog}) => {
  console.log(details)
  
  const formattedDate = new Date(details.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-[#F3F4F6] px-5  lg:h-fit ">
      <PageContainer>
        <div className="h-full relative pt-28 pb-3  lg:pt-24 ">
          <div className="flex flex-col  z-30 justify-center h-auto   w-full space-y-6 lg:py-12">
            <h1 className="text-2xl text-center max-w-4xl mx-auto font-bold lg:text-4xl xl:text-4xl capitalize text-zinc-800 ">
              {details.title}
            </h1>

            <div className="lg:flex items-center border-t pt-4 justify-between gap-5 grid lg:space-x-4">
              <div className="flex items-center space-x-3">
                <p className="text-xs md:text-sm  text-zinc-700 px-2 py-1 capitalize bg-zinc-200 rounded-sm">{details.category}</p>
                <p className="text-sm lg:text-base text-zinc-500">{details.readTime} min read</p>
                <p className="text-sm lg:text-base text-zinc-500">
                  {formattedDate}
                </p>
              </div>
              <div className="flex space-x-4 ">
                <Image alt={details.title
                } src={details.author.profilePic.url} width={90} height={90} className="w-[50px] rounded-full object-cover h-[50px]" />
                <div className="flex flex-col">
                  <h6 className="text-zinc-700 font-medium">{details.author.name}</h6>
                  <p className="text-zinc-500 text-sm">{details.author.role}</p>
                </div>
              </div>
            </div>

            <div className="w-full h-[250px] lg:h-[600px] rounded-xl overflow-hidden">
            <Image alt="" src={details.image.url} width={1200} height={1200} className="w-full lg:h-full rounded- object-cover h-auto" />
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default BlogDetailHero;
