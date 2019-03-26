function(location, ellipsis) {
  const EllipsisApi = require('ellipsis-api');
const api = new EllipsisApi(ellipsis);

api.say({
  message: `An accident has been reported by ${ellipsis.event.user.formattedLink} in ${location.label}`,
  channel: "wc_accidents"
}).then(() => {
  ellipsis.success(`
For urgent care, proceed to:

${location.urgentCare}
  `);
});
}
