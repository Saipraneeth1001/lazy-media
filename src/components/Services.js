import 
{ ArrowPathIcon, CloudArrowUpIcon, 
    FingerPrintIcon, LockClosedIcon,
    ChartPieIcon,
    ChartBarIcon,
    BriefcaseIcon,
 } 
from '@heroicons/react/24/outline'


const features = [
  {
    name: 'Social Media Strategy',
    description:
      'Developing custom strategies that align with your business goals.',
    icon: ChartPieIcon,
  },
  {
    name: 'Content Creation',
    description:
      'Crafting compelling content that resonates with your audience.',
    icon: BriefcaseIcon,
  },
  {
    name: 'Community Management',
    description:
      'Engaging with your community to build brand loyalty.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Analytics and Reporting',
    description:
      'Providing insights to refine and improve your social media impact.',
    icon: ChartBarIcon,
  },
]

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Explore the range of services we offer:
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
