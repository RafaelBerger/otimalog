import "../styles/section-basic.css";

interface ContentShowcaseProps {
  children: React.ReactNode;
  src: string;
  isReversed: boolean;
}

function ContentShowcase({ children, src, isReversed }: ContentShowcaseProps) {
  return (
    <section className="section-container">
      {isReversed ? (
        <>
          <div className="image-content-reversed">
            <div>
              <img src={src} alt="Illustration" />
            </div>
          </div>
          <div className="text-content">{children}</div>
        </>
      ) : (
        <>
          <div className="text-content">{children}</div>
          <div className="image-content">
            <div>
              <img src={src} alt="Illustration" />
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default ContentShowcase;
