import React from "react";

function Sidebar() {
  return (
    <div className="fixed w-[200px] border px-4 bg-white">
      <div>
        <section className="my-3 p-1">
          <h1 className="my-2 text-xl text-gray-700">Colour</h1>
          <input className="mr-2" type="checkbox" name="red" id="red" />
          <label htmlFor="red">Red</label>
          <br />
          <input className="mr-2" type="checkbox" name="blue" id="blue" />
          <label htmlFor="">Blue</label>
          <br />
          <input className="mr-2" type="checkbox" name="green" id="green" />
          <label htmlFor="green">Green</label>
        </section>
        <section className="my-3 p-1">
          <h1 className="my-2 text-xl text-gray-700">Gender</h1>
          <input className="mr-2" type="checkbox" name="men" id="men" />
          <label htmlFor="men">Men</label>
          <br />
          <input className="mr-2" type="checkbox" name="women" id="women" />
          <label htmlFor="women">Women</label>
        </section>
        <section className="my-3 p-1">
          <h1 className="my-2 text-xl text-gray-700">Price</h1>
          <input className="mr-2" type="checkbox" name="0-250" id="0-250" />
          <label htmlFor="0-250">0-Rs250</label>
          <br />
          <input className="mr-2" type="checkbox" name="251-450" id="251-450" />
          <label htmlFor="251-450">Rs251-450</label>
          <br />
          <input className="mr-2" type="checkbox" name="450" id="450" />
          <label htmlFor="450">Rs 450</label>
        </section>
        <section className="my-3 p-1">
          <h1 className="my-2 text-xl text-gray-700">Type</h1>
          <input className="mr-2" type="checkbox" name="polo" id="polo" />
          <label htmlFor="polo">Polo</label>
          <br />
          <input className="mr-2" type="checkbox" name="hoodie" id="hoodie" />
          <label htmlFor="hoodie">Hoodie</label>
          <br />
          <input className="mr-2" type="checkbox" name="basic" id="basic" />
          <label htmlFor="basic">Basic</label>
        </section>
      </div>
    </div>
  );
}

export default Sidebar;
