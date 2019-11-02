export const fetchBenches = () => {
  return $.ajax({
    method: 'GET',
    url: `api/benches`,
    error: (error) => console.log(error)
 })
};