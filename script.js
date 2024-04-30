// Define an async function
async function migrateToMpl() {
    const ix = createMigrateToMplInstruction({
        policy: "2jfkE654yAZDP3FfowFZ2bwA5MbQKnAWZaEQv44L1BB4",
        freezeAuthority: findFreezeAuthorityPk("2jfkE654yAZDP3FfowFZ2bwA5MbQKnAWZaEQv44L1BB4"),
        mint: "2HgRnPXNWaKbVhfoJnrDGwPbGxbsv2uHi3vo1Qar7Su3",
        metadata: findMetadataPda("2HgRnPXNWaKbVhfoJnrDGwPbGxbsv2uHi3vo1Qar7Su3"),
        mintState: findMintStatePk("2HgRnPXNWaKbVhfoJnrDGwPbGxbsv2uHi3vo1Qar7Su3"),
        from: "./keypair.json",
        fromAccount: tokenAccount,
        cmtProgram: CMT_PROGRAM,
        instructions: SYSVAR_INSTRUCTIONS_PUBKEY,
        edition: findMasterEditionV2Pda("2HgRnPXNWaKbVhfoJnrDGwPbGxbsv2uHi3vo1Qar7Su3"),
        metadataProgram: TokenMetadataProgram.publicKey,
    });

    // Now it's valid to use await because it's inside an async function
    await process_tx(conn, [ix], "./keypair.json");
}

// Call the async function
migrateToMpl();
