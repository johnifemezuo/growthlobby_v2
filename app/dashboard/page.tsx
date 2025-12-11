type StatCard = {
  title: string;
  value: string;
  delta: string;
  footnote: string;
};

type Product = {
  name: string;
  unitsSold: number;
  revenue: string;
  bestsellerDay: string;
};

type Customer = {
  name: string;
  company: string;
  orders: number;
  lifetimeValue: string;
  trend: string;
};

type ChannelStat = {
  channel: string;
  contribution: number;
  yoy: string;
};

const statCards: StatCard[] = [
  {
    title: "Gross Merchandise Volume",
    value: "$4.2M",
    delta: "+24% vs 2024",
    footnote: "Peak day: Nov 28 ($320K)",
  },
  {
    title: "Units Shipped",
    value: "86.4K",
    delta: "+18% vs 2024",
    footnote: "Free shipping used 72% of orders",
  },
  {
    title: "Repeat Customers",
    value: "2,870",
    delta: "34% of total customers",
    footnote: "Reorder window shrank to 29 days",
  },
  {
    title: "Avg. Order Value",
    value: "$137",
    delta: "+11% vs 2024",
    footnote: "Bundles lifted AOV by $18",
  },
];

const topProducts: Product[] = [
  {
    name: "Aurora Silk Wrap Dress",
    unitsSold: 1240,
    revenue: "$182K",
    bestsellerDay: "May 12",
  },
  {
    name: "Noir Traveler Weekender",
    unitsSold: 910,
    revenue: "$146K",
    bestsellerDay: "Oct 03",
  },
  {
    name: "Essential Capsule Sneaker",
    unitsSold: 1_580,
    revenue: "$129K",
    bestsellerDay: "Mar 22",
  },
];

const customerLeaders: Customer[] = [
  {
    name: "Lena Park",
    company: "Maven Outfitters",
    orders: 42,
    lifetimeValue: "$58K",
    trend: "+12% YoY",
  },
  {
    name: "Ravi Patel",
    company: "Patel & Co.",
    orders: 37,
    lifetimeValue: "$46K",
    trend: "+33% YoY",
  },
  {
    name: "Elena García",
    company: "Valencia Studio",
    orders: 31,
    lifetimeValue: "$39K",
    trend: "+7% YoY",
  },
];

const channelStats: ChannelStat[] = [
  { channel: "Organic", contribution: 32, yoy: "+9%" },
  { channel: "Paid Social", contribution: 26, yoy: "+14%" },
  { channel: "Email & SMS", contribution: 18, yoy: "+22%" },
  { channel: "Wholesale", contribution: 14, yoy: "+31%" },
  { channel: "Marketplace", contribution: 10, yoy: "-5%" },
];

const seasonalMoments = [
  {
    title: "Q1 Capsule Drop",
    result: "+18% lift to returning buyers",
    detail: "Made-to-order assortment sold out in 36h.",
  },
  {
    title: "Summer Concierge Launch",
    result: "+11% upsell rate",
    detail: "Customers bundled accessories with apparel.",
  },
  {
    title: "Black Friday Weekend",
    result: "$642K in 4 days",
    detail: "Highest conversion on mobile (5.8%).",
  },
];

const categoryMix = [
  { label: "Apparel", value: 46 },
  { label: "Accessories", value: 28 },
  { label: "Footwear", value: 17 },
  { label: "Lifestyle", value: 9 },
];

const fulfillmentHealth = {
  inTimeShipments: 94,
  refundRate: 1.8,
  nps: 68,
};

export default function YearRecapDashboard() {
  return (
    <section className="min-h-screen bg-zinc-950 text-zinc-50 px-6 py-16 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-12">
        <header className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-zinc-400">
            2025 Year Recap
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Commerce Performance Dashboard
              </h1>
              <p className="mt-2 max-w-2xl text-base text-zinc-400">
                Give every customer a personalized retrospective of what they
                achieved in 2025—top products, most loyal buyers, and the
                channels that helped them scale.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm text-zinc-200">
              <p className="text-xs uppercase tracking-widest text-zinc-400">
                Most active customer
              </p>
              <p className="text-lg font-semibold text-white">
                Maven Outfitters
              </p>
              <p className="text-xs text-emerald-300">42 orders · $58K LTV</p>
            </div>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {statCards.map((card) => (
            <article
              key={card.title}
              className="rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-6 shadow-[0_10px_60px_rgba(0,0,0,0.35)]"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                {card.title}
              </p>
              <p className="mt-4 text-3xl font-semibold text-white">
                {card.value}
              </p>
              <p className="mt-1 text-sm text-emerald-300">{card.delta}</p>
              <p className="mt-6 text-xs text-zinc-400">{card.footnote}</p>
            </article>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          <article className="rounded-3xl border border-white/5 bg-white/5/30 p-6 lg:col-span-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400">
                Top sold products
              </h2>
              <span className="text-xs text-zinc-500">Based on units sold</span>
            </div>
            <div className="mt-6 space-y-4">
              {topProducts.map((product) => (
                <div
                  key={product.name}
                  className="rounded-2xl border border-white/5 bg-white/5 p-4"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {product.name}
                      </p>
                      <p className="text-xs text-zinc-400">
                        Bestseller day • {product.bestsellerDay}
                      </p>
                    </div>
                    <p className="text-sm text-emerald-300">
                      {product.revenue}
                    </p>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-blue-400"
                      style={{
                        width: `${Math.min((product.unitsSold / 1580) * 100, 100)}%`,
                      }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-zinc-400">
                    {product.unitsSold.toLocaleString()} units shipped
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-white/5 bg-white/5 p-6 lg:col-span-2">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400">
              Category mix
            </h2>
            <div className="mt-6 space-y-4">
              {categoryMix.map((category) => (
                <div key={category.label}>
                  <div className="flex items-center justify-between text-sm">
                    <p className="text-white">{category.label}</p>
                    <p className="text-zinc-400">{category.value}%</p>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-500"
                      style={{ width: `${category.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-zinc-400">
              Apparel and accessories accounted for 74% of 2025 revenue.
            </p>
          </article>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-3xl border border-white/5 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400">
                Customer leaderboard
              </h2>
              <span className="text-xs text-zinc-500">Top lifetime value</span>
            </div>
            <div className="mt-6 space-y-5">
              {customerLeaders.map((customer, index) => (
                <div
                  key={customer.name}
                  className="flex items-center justify-between rounded-2xl border border-white/5 bg-black/30 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sm font-semibold text-white">
                      #{index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {customer.name}
                      </p>
                      <p className="text-xs text-zinc-400">
                        {customer.company}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-white">{customer.lifetimeValue}</p>
                    <p className="text-xs text-emerald-300">{customer.trend}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-white/5 bg-white/5 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400">
              Fulfillment health
            </h2>
            <div className="mt-6 space-y-5 text-sm text-zinc-200">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                  On-time shipments
                </p>
                <p className="mt-2 text-3xl font-semibold text-white">
                  {fulfillmentHealth.inTimeShipments}%
                </p>
                <p className="text-xs text-emerald-300">
                  38 hours avg. door-to-door
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="rounded-2xl border border-white/5 bg-black/30 p-4">
                  <p className="text-zinc-400">Refund rate</p>
                  <p className="mt-1 text-2xl font-semibold text-white">
                    {fulfillmentHealth.refundRate}%
                  </p>
                  <p className="text-emerald-300">-0.8 pts vs 2024</p>
                </div>
                <div className="rounded-2xl border border-white/5 bg-black/30 p-4">
                  <p className="text-zinc-400">NPS</p>
                  <p className="mt-1 text-2xl font-semibold text-white">
                    {fulfillmentHealth.nps}
                  </p>
                  <p className="text-emerald-300">Top decile industry</p>
                </div>
              </div>
              <div className="rounded-2xl border border-white/5 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                  fulfillment notes
                </p>
                <p className="mt-2 text-sm text-zinc-200">
                  Weekend micro-fulfillment hubs unlocked 4h faster SLAs for VIP
                  customers.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-white/5 bg-white/5 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400">
              Channel contribution
            </h2>
            <div className="mt-6 space-y-4">
              {channelStats.map((channel) => (
                <div
                  key={channel.channel}
                  className="flex items-center justify-between rounded-2xl border border-white/5 bg-black/30 px-4 py-3"
                >
                  <div>
                    <p className="text-sm text-white">{channel.channel}</p>
                    <p className="text-xs text-zinc-400">{channel.yoy} YoY</p>
                  </div>
                  <p className="text-lg font-semibold text-white">
                    {channel.contribution}%
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-zinc-400">
              Email/SMS drove the highest repeat order rate despite lower reach.
            </p>
          </article>
        </div>

        <article className="rounded-3xl border border-white/5 bg-gradient-to-r from-white/5 via-white/0 to-white/5 p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-zinc-400">
                Seasonal plays
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                Breakout moments that defined 2025
              </h2>
              <p className="text-sm text-zinc-400">
                Use them as templates when you send each customer their recap
                email or dashboard story.
              </p>
            </div>
            <button className="w-full rounded-2xl border border-white/10 bg-white/90 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-white lg:w-auto">
              Export recap deck
            </button>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {seasonalMoments.map((moment) => (
              <div
                key={moment.title}
                className="rounded-2xl border border-white/5 bg-black/30 p-4"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                  {moment.title}
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  {moment.result}
                </p>
                <p className="mt-1 text-sm text-zinc-400">{moment.detail}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
