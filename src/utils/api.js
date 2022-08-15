import axios from "axios";

async function fetchTimelineData() {
  try {
    const { data } = await axios.get(
      `${process.env.GRIDSOME_TIMELINE_DATA_URL}`
    );
    console.log(data);
    if (!data) {
      return [];
    }
    return data.map((fileData) => {
      return {
        title: fileData.title,
        datePublished: fileData["date-published"],
        content: fileData.content,
        fullContent: fileData["full-content"],
        readTime: fileData["read-time"],
        readText: fileData["read-text"],
        readLink: fileData["read-link"],
      };
    });
  } catch (_) {
    return [];
  }
}

export { fetchTimelineData };
