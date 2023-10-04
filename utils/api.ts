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

interface ProjectsData {
  title: string;
  content: string;
  language: string;
  link: string;
}

interface EmailResponse {
  message: string;
  status: number;
}

async function fetchTimelineData (): Promise<TimelineData[]> {
  try {
    const { data } = await axios.get(
      'https://raw.githubusercontent.com/oloko64/oloko64-dev/main/dynamic-data/files/timeline/timeline.json'
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
        readLinks: fileData['read-links']
      }
    })
  } catch (_) {
    return []
  }
}

async function fetchProjectsData (): Promise<ProjectsData[]> {
  try {
    const { data } = await axios.get(
      'https://raw.githubusercontent.com/oloko64/oloko64-dev/main/dynamic-data/files/projects/projects.json'
    )
    if (!data) {
      return []
    }
    return data
  } catch (_) {
    return []
  }
}

async function sendContactEmail (contact: string, subject :string, body: string) : Promise<EmailResponse> {
  const { data } = await axios.post('https://cmt3c5s36x3cfgmn27feawwfje0erfxd.lambda-url.us-east-1.on.aws/send-message', { contact, subject, body })
  return data
}

export { fetchTimelineData, TimelineData, ProjectsData, sendContactEmail, fetchProjectsData }
