export interface Step {
  title: string
  description: string
}
export interface StepListProps {
  steps: Step[]
}

export default function StepList({ steps }: StepListProps) {
  return (
    <ul>
      {steps.map((step, index) => (
        <li className="flex gap-3 my-6" key={index}>
          <ListNumber>{index + 1}</ListNumber>
          <div>
            <h3 className="mt-2 text-2xl font-semibold text-rose-of-sharon-800">
              {step.title}
            </h3>
            <p className="mt-2 font-serif text-lg italic font-medium text-storm-dust-800">
              {step.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}

function ListNumber({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative w-12 h-12 p-6 grid place-content-center">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 34 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.60703 8.93656C3.13078 7.38902 4.19206 6.13268 5.46008 5.20327C6.76786 4.24484 8.25535 3.57763 9.74761 3.0086C10.5141 2.71683 11.2881 2.43734 12.0764 2.21921C12.9214 1.98602 13.7833 1.81698 14.6506 1.70986C16.3947 1.49453 18.171 1.52465 19.9066 1.80526C21.6411 2.08531 23.3476 2.60749 24.9347 3.39911C26.3655 4.11319 27.7173 5.03144 28.8241 6.23143C29.7995 7.2886 30.5751 8.5388 31.1253 9.89332C31.6639 11.2183 31.9825 12.647 32.0864 14.0829C32.1924 15.5468 32.0838 17.0252 31.7657 18.4539C31.4445 19.8954 30.9149 21.2817 30.1849 22.5481C29.412 23.8892 28.4154 25.0703 27.2577 26.0566C25.9971 27.1299 24.5477 27.9595 23.0268 28.5453C21.4895 29.1372 19.8727 29.4959 18.2426 29.6387C16.603 29.7826 14.9432 29.7218 13.3179 29.4535C11.6836 29.184 10.0757 28.7182 8.57076 27.9902C7.03716 27.2482 5.60692 26.2613 4.37918 25.0401C3.16523 23.8329 2.14954 22.3969 1.46093 20.7919C0.767546 19.1758 0.426155 17.3895 0.445769 15.6182C0.464853 13.871 0.841235 12.1176 1.61626 10.5667C2.39446 9.00852 3.56865 7.71593 4.95277 6.73742C6.3565 5.74496 7.93622 5.06548 9.55359 4.56562C11.1932 4.05852 12.8811 3.72379 14.5721 3.47051C16.2796 3.21501 18.0088 3.06885 19.7343 3.12017C21.4227 3.16982 23.1148 3.41529 24.7168 3.99325C26.2377 4.54164 27.6589 5.4108 28.804 6.60465C29.7698 7.61161 30.529 8.82052 31.1168 10.1064C31.7456 11.481 32.1755 12.956 32.431 14.4567C32.6881 15.9658 32.7591 17.5139 32.6287 19.0413C32.5036 20.5007 32.184 21.9624 31.612 23.3012C31.0119 24.7065 30.1377 25.9534 28.989 26.9157C27.6595 28.0298 26.0448 28.7171 24.3988 29.1132C22.8365 29.4897 21.2266 29.5924 19.6273 29.5193C18.1493 29.4513 16.6772 29.2275 15.2401 28.8582C13.7865 28.4845 12.3653 27.9595 11.0246 27.2582C9.70255 26.5676 8.45519 25.7079 7.36635 24.6569C6.28705 23.6148 5.37633 22.3886 4.71369 21.0117C3.98532 19.4993 3.55911 17.8196 3.47429 16.1259C3.39053 14.4545 3.63757 12.7825 4.14912 11.2004C4.66598 9.60378 5.44523 8.10756 6.3936 6.75081C7.36423 5.36282 8.52306 4.11877 9.80274 3.04486C10.4097 2.53552 11.0485 2.06635 11.7106 1.63957C12.3743 1.21224 13.0534 0.79718 13.7637 0.460783C13.9333 0.381006 13.7865 0.118807 13.6179 0.198582C12.8657 0.554506 12.1278 0.932747 11.4265 1.39188C10.7172 1.85658 10.0381 2.37094 9.39084 2.92658C8.09896 4.0362 6.94279 5.32098 5.97163 6.74746C5.01479 8.15219 4.24295 9.7042 3.74147 11.3522C3.24846 12.9722 3.02264 14.6894 3.13767 16.3886C3.25535 18.1286 3.71708 19.8413 4.48627 21.3866C5.17965 22.778 6.13014 24.0231 7.23594 25.0764C8.3619 26.1486 9.64582 27.0306 11.0077 27.7347C12.3902 28.4488 13.8533 28.9893 15.3503 29.3681C16.8309 29.743 18.3502 29.9606 19.8722 30.0169C21.5346 30.0783 23.2145 29.9461 24.8313 29.5193C26.5288 29.0713 28.1641 28.2981 29.5096 27.1065C30.6514 26.0956 31.5203 24.7846 32.1034 23.3442C32.6791 21.9222 32.9956 20.402 33.1095 18.8634C33.2277 17.2757 33.126 15.6707 32.8402 14.1081C32.5593 12.5722 32.0907 11.0693 31.4259 9.66961C30.8036 8.35804 29.9946 7.12459 28.9816 6.11317C27.7559 4.88975 26.2547 4.01444 24.6538 3.46605C22.9982 2.8987 21.2457 2.67108 19.5096 2.63817C17.7358 2.60525 15.9631 2.77819 14.2095 3.05211C12.4835 3.32212 10.7612 3.67637 9.09292 4.22197C7.4464 4.76088 5.83434 5.49392 4.42743 6.55444C3.02635 7.60994 1.85215 8.98007 1.09515 10.6163C0.340808 12.2459 -0.0148958 14.0634 0.000477422 15.8726C0.0158506 17.7075 0.407606 19.5362 1.14976 21.1964C1.87919 22.8298 2.94789 24.2937 4.20744 25.5138C5.48341 26.75 6.96241 27.7514 8.54638 28.4917C10.1012 29.2186 11.7482 29.6872 13.4303 29.9444C15.1075 30.201 16.8118 30.2563 18.4997 30.0856C20.1749 29.9154 21.8325 29.5333 23.4043 28.8973C24.9734 28.2619 26.4466 27.3821 27.7385 26.2468C28.9079 25.2198 29.904 23.9852 30.6705 22.6C31.3994 21.2829 31.9253 19.8391 32.2306 18.3501C32.5322 16.8773 32.6255 15.3549 32.4904 13.8553C32.3552 12.3519 31.9979 10.8785 31.4095 9.50002C30.8216 8.12374 29.993 6.85904 28.972 5.79797C27.8005 4.58013 26.374 3.64847 24.8764 2.94053C23.2415 2.16843 21.5012 1.66244 19.7264 1.40972C17.9389 1.15533 16.1243 1.15367 14.3368 1.41029C12.6325 1.65575 11.0029 2.19354 9.40251 2.8429C7.89594 3.45433 6.41428 4.19408 5.133 5.24121C3.95987 6.20019 3.00567 7.4158 2.54077 8.91704C2.52646 8.96222 2.59219 8.98008 2.60703 8.93656Z"
          fill="#BA6025"
        />
      </svg>
      <div className="text-3xl font-script text-brandy-punch-600">
        {children}
      </div>
    </div>
  )
}