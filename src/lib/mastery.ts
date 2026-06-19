export function calculateMastery(
  accuracy: number,
  revisionStage: number
) {

  const mastery =
    accuracy * 0.8 +
    revisionStage * 4;

  return Math.max(
    0,
    Math.min(
      100,
      Math.round(mastery)
    )
  );

}