const map = {
  blog: 'Blog',
  github: 'Github',
  stackoverflow: 'Stack Overflow',
  segmentfault: 'Segment Fault',
};

export const description = function (value) {
  return (map[value.toLowerCase()] || value);
};

export const urlTarget = function (value, type) {
  console.log(type);
  return value.replace(/href=/gi, ` target=${type} href=`);
};

