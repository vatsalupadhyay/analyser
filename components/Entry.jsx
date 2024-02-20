import { Button } from "./ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "./ui/avatar";
import { Input } from "./ui/input";
import {
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
  Card,
} from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Award,
  CameraIcon,
  CupSoda,
  MedalIcon,
  PlusIcon,
  Trophy,
  VideoIcon,
} from "lucide-react";
import { Rate } from "antd";
import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import { Button as AButton, Divider, Space, Tour } from "antd";

export default function Entry() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const [open, setOpen] = useState(false);

  const steps = [
    {
      title: "Search Keywords/Asin",
      description: "Search any keywords/Asin to get Consumer Insight.",
      target: () => ref1.current,
    },
    {
      title: "Button Group",
      description: "Explore different options by clicking on these buttons.",
      target: () => ref2.current,
    },
    {
      title: "Create Report Section",
      description: "Create your own report here.",
      target: () => ref3.current,
    },
    {
      title: "See Demo Reports",
      description: "Explore different reports by clicking here.",
      target: () => ref4.current,
    },
  ];
  return (
    <div className="ml-[200px]">
      <div className="p-4">
        <div className="flex gap-4">
          <div className="pt-10">
            <div className="mb-4">
              <div className="flex flex-col justify-between items-center">
                <h2 className="text-2xl font-bold">
                  Search any keywords/Asin to Get Consumer Insight
                </h2>
                <div ref={ref1} className="flex items-center space-x-2 py-5">
                  <Input
                    className="border rounded-md w-[300px]"
                    placeholder="Powered Toothbrush"
                  />
                  <Button>Search</Button>
                </div>
              </div>
              <div ref={ref2} className="flex justify-evenly mx-10 mt-2">
                <Button variant="outline">Customer Profile</Button>
                <Button variant="outline">Usage Scenario</Button>
                <Button variant="outline">Rating Optimization</Button>
                <Button variant="outline">Customer Sentiment</Button>
                <Button variant="outline">Customer Expectation</Button>
                <Button variant="outline">Purchase Motivations</Button>
              </div>
            </div>
            <div className="flex gap-4 mb-4">
              <Card className="bg-gradient-to-br from-white via-slate-300 to-gray-600">
                <CardHeader>
                  <CardTitle>
                    Researching Market, Finding Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-black">
                    Conducting Research from Categories to Specifications,
                    Identifying Trends and Seizing Opportunities
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost">Tutorial</Button>
                </CardFooter>
              </Card>
              <Card className="bg-gradient-to-br from-white via-slate-300 to-gray-600">
                <CardHeader>
                  <CardTitle>Comparing Competitors, Identifying Gaps</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-black">
                    Gaining In-depth Insights into the Gap, Enhancing Clarity in
                    Optimization and Improvement Direction
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost">Tutorial</Button>
                </CardFooter>
              </Card>
              <Card className="bg-gradient-to-br from-white via-slate-300 to-gray-600">
                <CardHeader>
                  <CardTitle>Optimizing Listings, Boosting Sales</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-black">
                    Based on Shulex VOC, Search Terms, and Category Product
                    Selling Points to Better Understand Consumers
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost">Tutorial</Button>
                </CardFooter>
              </Card>
            </div>
            <div className="flex my-5 justify-between">
              <h3 className="text-xl font-bold mb-2">Create Your Own Report</h3>
              <div className=" flex justify-center">
                <Button ref={ref3} className="mr-3">
                  {" "}
                  <PlusIcon className="text-sm mr-2" /> Create Report
                </Button>
                {/* <Button variant="outline">
                  <VideoIcon className="mr-2 text-xs" /> Learn
                </Button> */}
                <Button variant="outline" onClick={() => setOpen(true)}>
                  Begin Tour
                </Button>
              </div>
            </div>
            <div className="mb-4">
              <div className="grid grid-cols-4 gap-4">
                <Card className="bg-[url('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT736ilJ6XSRS4WfyOYkhQDMjfIUm_W1q61GwLEc37OUzjcDRiT')] bg-cover">
                  <div className="h-[250px]"></div>
                  <CardContent>
                    <h4 className="text-lg text-white font-semibold mt-2">
                      Earbud Headphones
                    </h4>
                    <div className="flex text-white items-center mt-1">
                      <Rate allowHalf disabled defaultValue={4.8} />
                      <span>4.8</span>
                    </div>
                    <Link ref={ref4} to="/analytics">
                      <Button className="mt-2  w-full" variant="outline">
                        See Demo Report
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                <Card className="bg-[url('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRj5rrqk9VvevivVLs4c-75ndiu0r7pv5Mun61GCePhVjZYBmpy')] bg-cover">
                  <div className="h-[250px]"></div>
                  <CardContent>
                    <h4 className="text-lg text-white font-semibold mt-2">
                      Laptop Backpack
                    </h4>
                    <div className="flex text-white items-center mt-1">
                      <Rate allowHalf disabled defaultValue={4.8} />
                      <span>4.8</span>
                    </div>
                    <Button className="mt-2  w-full" variant="outline">
                      See Demo Report
                    </Button>
                  </CardContent>
                </Card>
                <Card className="bg-[url('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT736ilJ6XSRS4WfyOYkhQDMjfIUm_W1q61GwLEc37OUzjcDRiT')] bg-cover">
                  <div className="h-[250px]"></div>
                  <CardContent>
                    <h4 className="text-lg text-white font-semibold mt-2">
                      Earbud Headphones
                    </h4>
                    <div className="flex text-white items-center mt-1">
                      <Rate allowHalf disabled defaultValue={4.8} />
                      <span>4.8</span>
                    </div>
                    <Button className="mt-2  w-full" variant="outline">
                      See Demo Report
                    </Button>
                  </CardContent>
                </Card>
                <Card className="bg-[url('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT736ilJ6XSRS4WfyOYkhQDMjfIUm_W1q61GwLEc37OUzjcDRiT')] bg-cover">
                  <div className="h-[250px]"></div>
                  <CardContent>
                    <h4 className="text-lg text-white font-semibold mt-2">
                      Earbud Headphones
                    </h4>
                    <div className="flex text-white items-center mt-1">
                      <Rate allowHalf disabled defaultValue={4.8} />
                      <span>4.8</span>
                    </div>
                    <Button className="mt-2  w-full" variant="outline">
                      See Demo Report
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="flex my-10 flex-col space-y-2 justify-between items-center">
              <p>Over 70,000+ users are currently using Analyser.ai</p>
              <div className="flex items-center  space-x-2">
                <Badge variant="secondary">
                  <Award size={15} /> Featured
                </Badge>
                <Badge variant="secondary">
                  <Trophy size={15} /> Excellent
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Tour
        type="primary"
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
      />
    </div>
  );
}
