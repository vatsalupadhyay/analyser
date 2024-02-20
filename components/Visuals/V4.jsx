import { ResponsiveBar } from "@nivo/bar";
import { ResponsivePie } from "@nivo/pie";
import { Button } from "../ui/button";

export default function V4() {
  return (
    <div className="bg-white/40 p-6 shadow-lg rounded-lg w-full mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">
          SAMSUNG WIRED HEADSET EARPHONE FOR 3.5MM JACK - WHITE
        </h1>
        <span className="text-sm font-medium bg-gray-200 px-3 py-1 rounded-full">
          100 records
        </span>
      </div>
      <div className="flex gap-8">
        <div className="flex flex-col">
          <LabelledpieChart className="w-[600px] h-[300px]" />
          <div className="flex justify-around mt-4">
            <span className="text-sm text-red-500">Negative: 49.0%</span>
            <span className="text-sm text-green-500">Positive: 42.0%</span>
          </div>
        </div>
        <div className="flex w-1/3">
          <div className="flex flex-col pr-5  mb-4">
            <h2 className="text-lg font-semibold">PRAISES</h2>
            <ul className="list-disc pl-5">
              <li>Comfort</li>
            </ul>
          </div>
          <div className="flex flex-col pr-5">
            <h2 className="text-lg font-semibold">COMPLAINTS</h2>
            <ul className="list-disc pl-5">
              <li>Reliability</li>
              <li>Sound</li>
              <li>"headset"</li>
              <li>"cheap"</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}

function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  );
}

function LabelledpieChart(props) {
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          { id: "Positive", value: 111 },
          { id: "Negative", value: 157 },
          { id: "None", value: 15 },
        ]}
        sortByValue
        margin={{ top: 30, right: 50, bottom: 30, left: 50 }}
        innerRadius={0.5}
        padAngle={1}
        cornerRadius={3}
        activeOuterRadiusOffset={2}
        borderWidth={1}
        arcLinkLabelsThickness={1}
        enableArcLabels={false}
        colors={["#2563eb", "#f87171", "#d1d5db"]}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}
