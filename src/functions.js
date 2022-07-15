function checkValidUUID(uuid) {
  const uuidRegexExp = (regexExp =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi);

  return uuidRegexExp.test(uuid);
}

module.exports = { checkValidUUID };
