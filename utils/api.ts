import axios from 'axios'

interface TimelineData {
  title: string;
  datePublished: string;
  content: string;
  fullContent: string[];
  readTime: string;
  readText: string;
  readLink: string;
}

interface EmailResponse {
  message: string;
  status: number;
}

async function fetchTimelineData (): Promise<TimelineData[]> {
  try {
    const { data } = await axios.get(
      'https://raw.githubusercontent.com/OLoKo64/oloko64-dev/main/dynamic-data/files/timeline/timeline.json'
    )
    if (!data) {
      return []
    }
    return data.map((fileData: any) => {
      return {
        title: fileData.title,
        datePublished: fileData['date-published'],
        content: fileData.content,
        fullContent: fileData['full-content'],
        readTime: fileData['read-time'],
        readText: fileData['read-text'],
        readLink: fileData['read-link']
      }
    })
  } catch (_) {
    return []
  }
}

async function sendContactEmail (subject :string, body: string) : Promise<EmailResponse> {
  const { data } = await axios.post('https://oloko64-dev-email-worker.herokuapp.com/send-mail', { subject, body })
  return data
}

export { fetchTimelineData, TimelineData, sendContactEmail }
