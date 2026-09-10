import CountUp from './reactbits/CountUp.jsx';

export default function Stats() {
  const statsList = [
    {
      value: 12,
      suffix: '+',
      label: 'Years of experience',
      decimals: 0,
      separator: '',
    },
    {
      value: 2500,
      suffix: '+',
      label: 'Patients supported',
      decimals: 0,
      separator: ',',
    },
    {
      value: 4.9,
      suffix: '/5',
      label: 'Patient rating',
      decimals: 1,
      separator: '',
    },
    {
      value: 15,
      suffix: '+',
      label: 'Treatment approaches',
      decimals: 0,
      separator: '',
    },
  ];

  return (
    <section className="border-y border-[#DDE4DB] bg-[#FFFFFF] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statsList.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#26332C] tracking-tight flex items-baseline">
                <CountUp
                  to={stat.value}
                  from={0}
                  duration={1.8}
                  decimals={stat.decimals}
                  separator={stat.separator}
                  className="tabular-nums"
                />
                <span className="text-[#C98F65] ml-0.5 font-sans font-normal text-2xl sm:text-3xl">
                  {stat.suffix}
                </span>
              </div>
              <p className="mt-2 text-xs sm:text-sm font-medium text-[#6E756F]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
