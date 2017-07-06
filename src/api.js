import request from 'superagent';

export function load(contextKey) {
  return request
    .get('https://your-api.here/get-annotation-mappings/')
    .query({ contextKey })
    .then(response => response.body);
}

export function save(updatedMappings, contextKey) {
  return request
    .post('https://your-api.here/save-annotation-mappings/')
    .send({ updatedMappings, contextKey })
    .then(response => response.body);
}
