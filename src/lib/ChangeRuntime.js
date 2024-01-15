export default function ChangeRuntime(time) {
  const hour = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hour}시간 ${minutes}분`;
}
