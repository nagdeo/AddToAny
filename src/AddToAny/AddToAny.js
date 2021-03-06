import React, { useState } from "react";
import "./AddToAny.css";

import { sites } from "../Commmon/SocialSites";
import { FaShareAlt } from "react-icons/fa";
const AddToAny = (props) => {
  const [socialSites, setSocialSites] = useState(sites);
  const [shareOrCross, setShareOrCross] = useState("share");
  const [iconsDropdown, setIconsDropdown] = useState(false);

  const fnOpenSocialSites = (e, site, index) => {
    if (site.name === "share") {
      let sites = [...socialSites];
      if (sites?.filter((item) => item.selected === true)?.length > 0) {
        setShareOrCross("cross");
      }
    } else if (site.name === "cross") {
      setShareOrCross("share");
    } else {
      window.scrollTo(0, 0);
      window.open(
        "https://www.addtoany.com/add_to/" +
          site.name +
          "?linkurl=" +
          window.location.href +
          "&amp;linkname=" +
          encodeURI("webTitle")
      );
    }
  };

  const fnAddSocialSites = (e, site, index) => {
    let sites = [...socialSites];
    if (sites[index].selected === true) {
      sites[index].selected = false;
    } else {
      sites[index].selected = true;
    }
    if (sites?.filter((item) => item.selected === true)?.length === 0) {
      setShareOrCross("share");
    }
    setSocialSites(sites);
  };
  return (
    <div className="add-to-any-main-container">
      <div className="main-div flex_kit">
        <button
          className="social-btns cross flex_kit"
          onClick={() => setIconsDropdown(!iconsDropdown)}
        >
          +
        </button>
        <div className="add-social-icons flex_kit">
          {iconsDropdown && (
            <div className="box-shadow">
              {socialSites?.map((site, i) => (
                <button
                  className={`social-btns  ${site.selected ? "disable" : ""}`}
                  onClick={(e) => fnAddSocialSites(e, site, i)}
                  key={i.toString()}
                >
                  {site.tag}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="share-btn ">
          {shareOrCross === "share" ? (
            <div
              className={` ${
                socialSites?.filter((item) => item.selected === true)
                  ?.length === 0
                  ? " tooltip"
                  : ""
              }`}
            >
              <button
                className={`social-btns ${
                  socialSites?.filter((item) => item.selected === true)
                    ?.length === 0
                    ? "disable "
                    : ""
                }`}
                onClick={(e) => fnOpenSocialSites(e, { name: "share" }, -1)}
              >
                <FaShareAlt />
              </button>
            </div>
          ) : (
            <button
              className="social-btns cross flex_kit"
              onClick={(e) => fnOpenSocialSites(e, { name: "cross" }, -1)}
            >
              X
            </button>
          )}
          {socialSites?.map(
            (site, i) =>
              shareOrCross === "cross" && (
                <button
                  className={`social-btns social_btns soc-btn ${
                    site.selected ? "d-block" : "d-none"
                  }`}
                  onClick={(e) => fnOpenSocialSites(e, site, i)}
                  key={i.toString()}
                >
                  {site.tag}
                </button>
              )
          )}
        </div>
      </div>
    </div>
  );
};
export default AddToAny;
