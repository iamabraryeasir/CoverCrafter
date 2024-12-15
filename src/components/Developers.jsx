const DEVELOPERS = [
  {
    name: "@Abrar Yeasir",
    url: "https://github.com/iamabraryeasir",
  },
  {
    name: "@Rudra Kaiser",
    url: "https://github.com/rudra-404",
  },
];

const Developers = () => {
  return (
    <div className="py-8">
      <h3 className="text-center text-md text-gray-500 dark:text-white">
        Application Developed by{" "}
        {DEVELOPERS.map((dev, index) => (
          <span key={dev.url}>
            <a
              href={dev.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              {dev.name}
            </a>
            {index < DEVELOPERS.length - 1 && " & "}
          </span>
        ))}
      </h3>
    </div>
  );
};

export default Developers;
