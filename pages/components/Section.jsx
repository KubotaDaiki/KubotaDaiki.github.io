export default function Section({ children, name }) {
  return (
    <>
      <div className="flex flex-col items-center my-16">
        <h2 className="text-5xl mb-4" id={name}>
          {name}
        </h2>
        {children}
      </div>
    </>
  );
}