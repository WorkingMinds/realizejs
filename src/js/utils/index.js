export * as uuid from './uuid';
export * as decorators from './decorators';
export * as QueryStringParser from './query_string_parser';

export function getProp(key, obj) {
  var keyArr = key.split('.');
  var prop = obj;

  try {
    while(keyArr.length > 0) {
      prop = prop[keyArr.shift()];
    }
  } catch(err) {
    return '';
  }
  return prop;
};