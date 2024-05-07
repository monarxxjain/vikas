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
        <div className="mainn md:flex align-middle justify-center md:px-40 px-6">
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
                <b>Biography -</b>
                <span>
                  Myself, Vikas Kumar Tiwari , Research Scholar in the Department of Computer
                  Science at <a className="px-1 underline " href="https://iiitl.ac.in/"> Indian Institute of Information Technology Lucknow</a>, India Under the
                  guidance of
                </span>
                <a className="px-1 underline" href="https://iiitl.ac.in/index.php/personnel/dr-saurabh-shukla/">Dr.Saurabh Shukla</a>
                <span>and</span>
                <a className="px-1 underline " href="https://sites.google.com/view/nsaini">Dr Naveen Saini.</a>
                <span>
                  I have worked before joining IIIT Lucknow as an Software
                  Engineer in E-Solutions at Greater Noida. I earned my M.Tech in the Department of
                  Information Technology from
                </span>
                <a className="px-1 underline " href="https://www.rmlau.ac.in/new/IET.aspx">Institute of Engineering and Technology Dr. RML Avadh University Ayodhya </a>
                <span>
                  further embellished with the prestigious Gold Medal in March 2021,
                  presented by UP Governor Mrs. Anandiben Patel. During my academic pursuits, I had
                  the privilege of collaborating with distinguished mentors such as Dr. Samridhi Singh and
                </span>
                <a className="px-1 underline " href="https://www.ietlucknow.ac.in/people/ukumar">Dr. Upendra Kumar.</a>
                <span>My journey into research was initiated through the rigorous
                  preparation and subsequent success in the Graduate Aptitude Test in Engineering
                  (GATE) exams of 2018 and 2019.My research interests endeavors Natural Language
                  Processing, Artificial Intelligence, Machine Learning, Deep Learning, Biometric
                  Systems,driven by a fervent interest in their practical implementations.
                </span>
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
              <div className="someNo">{`ResearcherID ` + homeData.ResearcherID}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
