import axios from "axios";

async function fetchTimelineData() {
  try {
    const { data } = await axios.get(
      "https://raw.githubusercontent.com/OLoKo64/oloko64-dev/main/dynamic-data/files/timeline/timeline.json"
    );
    if (!data) {
      return [];
    }
    return data.map((fileData: any) => {
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
