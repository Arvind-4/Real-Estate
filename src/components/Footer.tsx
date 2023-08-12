const Footer = () => {
  return (
    <footer className="px-4 pt-12 pb-32 bg-gray-200 border-t border-gray-900 lg:0">
      <div className="lg:flex lg:justify-evenly">
        <div className="max-w-sm mt-6 text-center lg:mt-0">
          <h6 className="mb-4 text-4xl font-semibold text-gray-700">
            Real Estate
          </h6>
          <p>
            The Real Estate company provides a platform for property buyers and
            sellers to locate properties of interest and source information
            about the process of buying and selling properties all over the
            world.
          </p>
        </div>
        <div className="mt-6 text-center lg:mt-0">
          <h6 className="mb-4 font-semibold text-gray-700">Quick links</h6>
          <ul>
            <li>
              {' '}
              <a href="" className="block py-2 text-gray-600">
                Home
              </a>{' '}
            </li>
            <li>
              {' '}
              <a href="" className="block py-2 text-gray-600">
                About us
              </a>{' '}
            </li>
            <li>
              {' '}
              <a href="" className="block py-2 text-gray-600">
                Contact Us
              </a>{' '}
            </li>
          </ul>
        </div>
        <div className="mt-6 text-center lg:mt-0">
          <h6 className="mb-4 font-semibold text-gray-700">Quick links</h6>
          <ul>
            <li>
              {' '}
              <a href="" className="block py-2 text-gray-600">
                Property
              </a>{' '}
            </li>
            <li>
              {' '}
              <a href="" className="block py-2 text-gray-600">
                About us
              </a>{' '}
            </li>
            <li>
              {' '}
              <a href="" className="block py-2 text-gray-600">
                Help
              </a>{' '}
            </li>
          </ul>
        </div>
        <div className="mt-6 text-center lg:mt-0">
          <h6 className="mb-4 font-semibold text-gray-700">Quick links</h6>
          <ul>
            <li>
              {' '}
              <a href="" className="block py-2 text-gray-600">
                FAQ
              </a>{' '}
            </li>
            <li>
              {' '}
              <a href="" className="block py-2 text-gray-600">
                About us
              </a>{' '}
            </li>
            <li>
              {' '}
              <a href="" className="block py-2 text-gray-600">
                New Property
              </a>{' '}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
