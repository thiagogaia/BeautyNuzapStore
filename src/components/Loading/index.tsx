import "./style.css";

const Loading = () => {
  return (
    <>
      <div className="loading-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
          width={200}
          height={200}
          style={{
            shapeRendering: "auto",
            display: "block",
          }}
          className="internal-circle"
        >
          <g data-idx={1}>
            <circle
              cx={50}
              cy={50}
              r={23}
              strokeWidth={8}
              stroke="#8c8c8c"
              strokeDasharray="36.12831551628262 36.12831551628262"
              strokeDashoffset="36.12831551628262"
              fill="none"
              strokeLinecap="round"
              data-idx={4}
            ></circle>
            <g data-idx={6} />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
          width={200}
          height={200}
          style={{
            shapeRendering: "auto",
            display: "block",
          }}
          className="external-circle"
        >
          <g data-idx={1}>
            <circle
              cx={50}
              cy={50}
              r={32}
              strokeWidth={8}
              stroke="#252525"
              strokeDasharray="50.26548245743669 50.26548245743669"
              fill="none"
              strokeLinecap="round"
              data-idx={2}
            ></circle>
            <g data-idx={6} />
          </g>
        </svg>
      </div>
    </>
  );
};

export default Loading;
