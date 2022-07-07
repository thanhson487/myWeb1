import React, { useEffect, useState } from "react";
import Banner from "../../common/component/Banner/index";
import Album from "./conponent/Album";
import Content from "./conponent/Content"
import * as Realm from "realm-web";
function ListAlbumScreen(props) {
  // const [res,setRes] = useState();

  // const loginAnonymous = async () => {
  //     const app = new Realm.App({ id: 'application-0-xmfdm'});
  //     const user = await app.logIn(Realm.Credentials.anonymous());
  //     const client = app.currentUser.mongoClient('mongodb-atlas')
  //     const rests = client.db('comment').collection('comment')
  //     setRes(rests);
  //     const data = await rests.find().then(res =>console.log('res',res)
  //     )

  //   };
  // useEffect(() =>{
  //     console.log("test");
  //     loginAnonymous()
  // },[])
  const title = "Phóng sự cưới";
  const content = "Cách để cặp đôi lưu giữ trọn vẹn ngày cưới"
  return (
    <div>
      <Banner title = {title} content = {content} />
      <Content />
      <Album />
    </div>
  );
}

export default ListAlbumScreen;
