const Logo = () => {
  return (
    <div data-nome="logo-1" className="overflow-visible tail-topo-logo js-tail-topo-inverter">
      <div className="ev-topo-logo-interno">
        <div className="ev-topo-logo-foto">
          <a href="/" className="ev-topo-logo-foto-link">
            <img
              loading="lazy"
              src="https://d27c430md2jwf3.cloudfront.net/img/3608396007.png"
              width={259}
              height={60}
              className="object-contain max-h-12 md:max-h-20 ev-topo-logo-foto-img tail-topo-logo-img"
              alt="Joelik"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Logo;
