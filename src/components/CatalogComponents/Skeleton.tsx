import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={350}
    height={670}
    viewBox="0 0 350 670"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="5" ry="5" width="320" height="390" />
    <rect x="15" y="459" rx="2" ry="2" width="285" height="55" />
    <rect x="15" y="525" rx="47" ry="47" width="50" height="30" />
    <rect x="15" y="669" rx="0" ry="0" width="51" height="37" />
    <rect x="15" y="415" rx="2" ry="2" width="120" height="30" />
    <rect x="73" y="525" rx="47" ry="47" width="50" height="30" />
    <rect x="131" y="525" rx="47" ry="47" width="50" height="30" />
    <rect x="15" y="565" rx="2" ry="2" width="40" height="28" />
    <rect x="15" y="600" rx="2" ry="2" width="138" height="43" />
  </ContentLoader>
);

export default Skeleton;
