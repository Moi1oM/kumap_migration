import axios from "axios";
import { useRouter } from "next/router";
import { json } from "stream/consumers";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  //1트
  fetch('https:/ku-map.com/detail_ajax/2')
    .then((res) => res.json())
    .then((data) => console.log(JSON.stringify(data)))

  // 2트 - 이건 그냥 다른 도메인으로 연결
  // axios.get('/api/2')
  //   .then(res => {
  //     console.log(res.data)
  //   })

  return <p>Entrance: {id}</p>;
};

export default Post;
