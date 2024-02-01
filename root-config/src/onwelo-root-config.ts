import { registerApplication, start } from 'single-spa';

registerApplication(
  '@onwelo/events-list',
  //@ts-ignore
  () => System.import('@onwelo/events-list'),
  // The function below is the "activity function", which must be provided
  (location) => location.pathname.startsWith('/events-list')
);

registerApplication(
  'add-event',
  //@ts-ignore
  () => System.import('add-event'),
  // The function below is the "activity function", which must be provided
  (location) => location.pathname.startsWith('/add-event')
);

start({
  urlRerouteOnly: true,
});
function loadWithoutAmd(name) {
  return Promise.resolve().then(() => {
    let globalDefine = (window as any).define;
    delete (window as any).define;
    return System.import(name).then((module) => {
      (window as any).define = globalDefine;
      return module;
    });
  });
}
