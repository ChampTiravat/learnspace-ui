import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { InfoBadge } from "../Badge";

import NavbarLink from "./NavbarLink";

const NavbarLinkButton = ({ url, label, hasBadge }) => (
  <NavbarLink>
    <Link href={url} prefetch>
      <a>
        {label}
        {hasBadge ? <InfoBadge>5</InfoBadge> : null}
      </a>
    </Link>
  </NavbarLink>
);

export default NavbarLinkButton;
