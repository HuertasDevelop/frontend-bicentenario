import { Suspense } from "react";

import { Metadata } from "next";
import { getSlugProject } from "@/redux/actions/getSlugProject";
import Image from "next/image";
import { FormLead } from "@/components/forms";
interface Props {
  params: { slug: string };
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getSlugProject(params.slug);

  return {
    title: `${project.name} - Lotemania`,
    description: project.description,
  };
}

export default async function Project({ params }: Props) {
  const project = getSlugProject(params.slug);
  return (
    <Suspense fallback={<>...</>}>
      <ProjectDetail promise={project} />
    </Suspense>
  );
}

async function ProjectDetail({ promise }: { promise: Promise<Project> }) {
  const project = await promise;
  if (!project) return null;
  return (
    <>
      <Image
        src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${project.photo_banner}`}
        alt={project?.description}
        width={3000}
        height={500}
        className="object-fill flex justify-center "
      />
      <div className="flex mx-auto max-w-7xl justify-between space-x-10">
        <div className="grid grid-cols-2 w-full">
          <div className="w-full bg-secondary-900 ">
            <span>Inicial desde:</span>
            <p>S/ 8999</p>
            <span> Al contado desde:</span>
            <p>S/ 8999</p>
          </div>
          <div className="w-full bg-primary">
            <span>Inicial desde:</span>
            <p>S/ 8999</p>
            <span> Al contado desde:</span>
            <p>S/ 8999</p>
          </div>
          <div className="w-full  col-span-2 mt-4">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lo- bortis nisl ut aliquip ex ea
              commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignis
            </p>
          </div>
          <div className="w-full  col-span-2 mt-4">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lo- bortis nisl ut aliquip ex ea
              commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignis
            </p>
          </div>
          <div className="w-full  col-span-2 mt-4">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lo- bortis nisl ut aliquip ex ea
              commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignis
            </p>
          </div>
          <div className="w-full  col-span-2 mt-4">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lo- bortis nisl ut aliquip ex ea
              commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignis
            </p>
          </div>
          <div className="w-full  col-span-2 mt-4">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lo- bortis nisl ut aliquip ex ea
              commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignis
            </p>
          </div>
          <div className="w-full  col-span-2 mt-4">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lo- bortis nisl ut aliquip ex ea
              commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignis
            </p>
          </div>
          <div className="w-full  col-span-2 mt-4">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lo- bortis nisl ut aliquip ex ea
              commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignis
            </p>
          </div>
          <div className="w-full  col-span-2 mt-4">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lo- bortis nisl ut aliquip ex ea
              commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignis
            </p>
          </div>
          <div className="w-full  col-span-2 mt-4">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lo- bortis nisl ut aliquip ex ea
              commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignis
            </p>
          </div>
          <div className="w-full  col-span-2 mt-4">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lo- bortis nisl ut aliquip ex ea
              commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignis
            </p>
          </div>
          <div className="w-full  col-span-2 mt-4">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lo- bortis nisl ut aliquip ex ea
              commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignis
            </p>
          </div>
          <div className="w-full  col-span-2 mt-4">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lo- bortis nisl ut aliquip ex ea
              commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignis
            </p>
          </div>
          <div className="w-full  col-span-2 mt-4">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lo- bortis nisl ut aliquip ex ea
              commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignis
            </p>
          </div>
          <div className="w-full  col-span-2 mt-4">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lo- bortis nisl ut aliquip ex ea
              commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignis
            </p>
          </div>
        </div>
        <div className="-m-20 w-full ">
          <FormLead sticky={true} />
        </div>
      </div>
    </>
  );
}
