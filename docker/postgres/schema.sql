CREATE TABLE IF NOT EXISTS "board"
(
  "board_id" UUID NOT NULL
    CONSTRAINT "board_pkey"
    PRIMARY KEY,
  "name"     VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS "workspace"
(
  "workspace_id" UUID NOT NULL
    CONSTRAINT "workspace_pkey"
    PRIMARY KEY,
  "name"         VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS "workspace_board"
(
  "workspace_id" UUID NOT NULL
    CONSTRAINT "workspace_board_workspace_fk"
    REFERENCES "workspace"
    ON UPDATE CASCADE ON DELETE CASCADE,
  "board_id"     UUID NOT NULL
    CONSTRAINT "workspace_board_board_fk"
    REFERENCES "board"
    ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE UNIQUE INDEX IF NOT EXISTS "workspace_board_workspace_id_board_id_uindex"
  ON "workspace_board" ("workspace_id", "board_id");

CREATE TABLE IF NOT EXISTS "row"
(
  "row_id"   UUID         NOT NULL
    CONSTRAINT "row_row_id_pk"
    PRIMARY KEY,
  "name"     VARCHAR(255) NOT NULL,
  "index"    SMALLINT     NOT NULL,
  "board_id" UUID         NOT NULL
    CONSTRAINT "row_board_board_fk"
    REFERENCES "board"
    ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE UNIQUE INDEX IF NOT EXISTS "row_index_board_id_uindex"
  ON "row" ("index", "board_id");

CREATE TABLE IF NOT EXISTS "column"
(
  "column_id" UUID         NOT NULL
    CONSTRAINT "column_column_id_pk"
    PRIMARY KEY,
  "name"      VARCHAR(255) NOT NULL,
  "index"     SMALLINT     NOT NULL,
  "board_id"  UUID         NOT NULL
    CONSTRAINT "column_board_board_fk"
    REFERENCES "board"
    ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE UNIQUE INDEX IF NOT EXISTS "column_index_board_id_uindex"
  ON "column" ("index", "board_id");

CREATE TABLE IF NOT EXISTS "card"
(
  "card_id"     UUID          NOT NULL
    CONSTRAINT "card_pkey"
    PRIMARY KEY,
  "title"       VARCHAR(255)  NOT NULL,
  "description" VARCHAR(1000) NOT NULL,
  "row_id"      UUID          NOT NULL
    CONSTRAINT "card_row_row_fk"
    REFERENCES "row"
    ON UPDATE CASCADE ON DELETE CASCADE,
  "column_id"   UUID          NOT NULL
    CONSTRAINT "card_column_column_fk"
    REFERENCES "column"
    ON UPDATE CASCADE ON DELETE CASCADE,
  "index"       SMALLINT      NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS "card_column_row_index_uindex"
  ON "card" ("column_id", "row_id", "index");

