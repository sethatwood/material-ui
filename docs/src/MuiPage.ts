export interface MuiPage {
  pathname: string;
  query?: object;
  hash?: string;
  children?: MuiPage[];
  disableDrawer?: boolean;
  icon?: string;
  /**
   * Indicates if the pages are regarding some legacy API.
   */
  legacy?: boolean;
  /**
   * Indicates if the pages are only available in some plan.
   * @default 'community'
   */
  plan?: 'community' | 'pro' | 'premium';
  /**
   * In case the children have pathnames out of pathname value, use this field to scope other pathnames.
   * Pathname can be partial, e.g. '/components/' will cover '/components/button/' and '/components/link/'.
   * @deprecated Dead code, to remove.
   */
  scopePathnames?: string[];
  /**
   * Pages are considered to be ordered depth-first.
   * If a page should be excluded from this order, set `order: false`.
   * You want to set `inSideNav: false` if you don't want the page to appear in an ordered list e.g. for previous/next page navigation.
   */
  inSideNav?: boolean;
  /**
   * Props spread to the Link component.
   */
  linkProps?: Record<string, unknown>;
  /**
   * Subheader to display before navigation links.
   */
  subheader?: string;
  /**
   * Overrides the default page title.
   */
  title?: string;
  /**
   * Indicates if the feature has been recently released.
   * @default false
   */
  newFeature?: boolean;
  /**
   * Indicates if the feature is in development.
   * @default false
   */
  comingSoon?: boolean;
}

export interface OrderedMuiPage extends MuiPage {
  ordered?: true;
}
