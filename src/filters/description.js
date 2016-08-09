const map = {
  blog: 'Blog',
  github: 'Github',
  stackoverflow: 'Stack Overflow',
  segmentfault: 'Segment Fault',
};

export default function description(value) {
  return (map[value.toLowerCase()] || value);
}
