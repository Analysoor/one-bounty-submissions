import {Submission} from "@/config/submissions";

export function getSubmissionKey(submission: Submission): string {
  return [submission.name || 'unknown', submission.authorGithub, submission.artPiecesUrl?.[0] || ''].join('-');
}
