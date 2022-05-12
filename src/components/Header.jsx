export default function Header() {
  return (
    <header>
      <div className="title-wrapper">
        <h1>Hello React</h1>
        <h2>
          Notes on a primer course from scrimba.com about the basics of React
        </h2>
      </div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <div>Home</div>
          </li>
          <li>
            <i className="fa-solid fa-angle-right"></i>
          </li>
          <li className="breadcrumb-item">
            <div>Library</div>
          </li>
          <li>
            <i className="fa-solid fa-angle-right"></i>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Data
          </li>
        </ol>
      </nav>
    </header>
  );
}
