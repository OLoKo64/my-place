import axios from "axios";

async function fetchPathData() {
  try {
    const { data } = await axios.get(
      `${process.env.GRIDSOME_FILE_SERVER_INDEX}`
    );
    if (!data) {
      return [];
    }
    const fileData = await Promise.all(
      data.contents["my-path"].map((file) =>
        axios.get(`${process.env.GRIDSOME_FILE_SERVER_MY_PATH}${file}`)
      )
    );
    return fileData
      .map((file) => file.data)
      .map((fileData) => {
        return {
          title: fileData.title,
          datePublished: fileData["date-published"],
          content: fileData.content,
          readTime: fileData["read-time"],
          readText: fileData["read-text"],
          readLink: fileData["read-link"],
        };
      });
  } catch (_) {
    return [];
  }
}

export { fetchPathData };
