import Albums from "@/app/components/Albums";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import dayjs from "dayjs";

export default async function Vote() {
  const supabase = createServerComponentClient({ cookies });
  let user = null;

  async function getAlbumSetDate(id) {
    const { data, error } = await supabase
      .from("profiles")
      .select("albums_set_date")
      .eq("id", id);

    if (error) {
      return error;
    }

    return data;
  }

  async function updateAlbumSetDate(id, newDate) {
    const { data, error } = await supabase
      .from("profiles")
      .update({ albums_set_date: newDate })
      .eq("id", id);

    if (error) {
      return error;
    }

    return data;
  }

  async function createAlbumSet() {
    const { data, error } = await supabase.from("random_albums").select();

    if (error) {
      return error;
    }

    return data;
  }

  async function updateAlbumSet(id, albumSet) {
    const { data, error } = await supabase
      .from("profiles")
      .update({ current_album_set: [...albumSet] })
      .eq("id", id);

    if (error) {
      console.log("error in updateAlbumSet", error);
      return error;
    }

    return data;
  }

  // 1: Get the user
  const { data: userData, error: userDataError } =
    await supabase.auth.getSession();

  if (userData?.session) {
    user = userData.session.user;
  }

  const albumSetDate = await getAlbumSetDate(userData.session.user.id);

  if (albumSetDate[0]["albums_set_date"] === null) {
    createAlbumSet()
      .then((albumSet) => {
        updateAlbumSet(userData.session.user.id, albumSet);
        return albumsData;
      })
      .then((data) => {
        return updateAlbumSetDate(
          userData.session.user.id,
          dayjs().format("YYYY/MM/DD")
        );
      });
  }

  return (
    <>
      <div>
        {user.email}
        <Albums user={user} />
      </div>
    </>
  );
}
