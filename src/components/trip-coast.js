export const getComponetTripCoast = ({totalCoast}) => (`
  <p class="trip-info__cost">
    Total: €&nbsp;<span class="trip-info__cost-value">${totalCoast ? totalCoast : 0}</span>
  </p>
`);
