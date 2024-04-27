import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { image, homeData } from "@/consts/data";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mt-24">
        <div className="mainn md:flex align-middle justify-center px-40">
          <div className="images flex md:block justify-center">
            <Image
              height={200}
              width={1300}
              src={"/soumendu.jpg"}
              className="p-3"
              alt=" face"
            />
          </div>
          <div className="maininfo">
            <div className="nameinfo px-4 py-2">
              <div
                className="name"
                style={{
                  fontFamily: " Georgia, Arial",
                  fontWeight: "700",
                  fontSize: "20px",
                  lineHeight: "26px",
                  color: "rgb(105, 115, 53",
                }}
              >
                {homeData.name}
              </div>
              <div
                className="post"
                style={{
                  fontFamily: " Georgia, Arial",
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "22px",
                  color: "rgb(105, 115, 53",
                }}
              >
                {homeData.post}
              </div>
              <div
                className="department"
                style={{
                  fontFamily: " Georgia, Arial",
                  fontWeight: "400",
                  fontSize: "15px",
                  lineHeight: "20px",
                  color: "rgb(105, 115, 53",
                }}
              >
                {homeData.department}
              </div>
              <div
                className="college"
                style={{
                  fontFamily: " Georgia, Arial",
                  fontWeight: "400",
                  fontSize: "15px",
                  lineHeight: "20px",
                  color: "rgb(105, 115, 53",
                }}
              >
                {homeData.college}
              </div>
            </div>
            <div className="bio px-4 py-2">
              <div
                className="biography"
                style={{
                  fontFamily: " Georgia, Arial",
                  fontWeight: "400",
                  fontSize: "16x",
                  lineHeight: "22px",
                  color: "rgb(105, 115, 53",
                }}
              >
                <b>Biography -</b> {homeData.bio}
              </div>
            </div>
            <div
              className="afterbio flex flex-wrap px-4 py-2"
              style={{
                fontFamily: " Georgia, Arial",
                fontWeight: "700",
                fontSize: "13px",
                lineHeight: "18px",
                color: "rgb(105, 115, 53",
              }}
            >
              <div className="someNo">{homeData.orc}</div>
              <div className="someNo">{homeData.scorpus}</div>
              <div className="someNo">{homeData.ResearcherID}</div>
            </div>
            <div className="links px-4 py-2">
              <Link href={homeData.ResearchGateLink} style={{ color: "blue" }}>
                Research Gate
              </Link>
              <Link
                href={homeData.googleScholar}
                style={{ color: "rgb(255, 102, 0)" }}
              >
                Google Scholar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
