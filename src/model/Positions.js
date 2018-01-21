export default class Positions {
  static findTeamRank = (teamId, positions) => {
    const zeroBasedIndex = positions.findIndex(team => team.id === teamId);
    return zeroBasedIndex + 1;
  };

  static findTeam = (teamId, positions) => {
    return positions.find(team => team.id === teamId);
  };

  static recalculateSwappedPositions = (
    sourceTeamId,
    targetTeamId,
    currentPositions,
  ) => {
    const clonedPositions = currentPositions.slice();

    const sourceRank = Positions.findTeamRank(sourceTeamId, clonedPositions);
    const targetRank = Positions.findTeamRank(targetTeamId, clonedPositions);

    const sourceTeam = Positions.findTeam(sourceTeamId, clonedPositions);
    const targetTeam = Positions.findTeam(targetTeamId, clonedPositions);

    clonedPositions[targetRank - 1] = sourceTeam;
    clonedPositions[sourceRank - 1] = targetTeam;
    return clonedPositions;
  };

  static recalculatePositionsWithRenamedTeam = (
    team,
    updatedText,
    currentPositions,
  ) => {
    const clonedPositions = currentPositions.slice();

    const teamRank = Positions.findTeamRank(team.id, clonedPositions);

    const renamedTeam = { ...team };
    renamedTeam.name = updatedText;

    clonedPositions[teamRank - 1] = renamedTeam;
    return clonedPositions;
  };
}
